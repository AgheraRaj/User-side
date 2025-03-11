import { Button, Loader } from "@mantine/core";
import { Eye, EyeOff, Lock, MessageSquare, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import AuthImagePattern from "../components/AuthImagePattern";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const validation = (values) => {
    const errors = {};
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!values.username) {
      errors.username = "Username is required!";
    } else if (values.username.length < 3) {
      errors.username = "Username must be at least 3 characters!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password must be at least 8 characters with letters and numbers!";
    }

    return errors;
  };

  const handalChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handalSubmit = async (e) => {
    e.preventDefault();
    const errors = validation(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
          username: formValues.username,
          password: formValues.password,
        });

        // Store the token from the response
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          
          notifications.show({
            title: "Success",
            message: "Login successful! Welcome back.",
            color: "green",
            autoClose: 2000,
          });

          // Reset form
          setFormValues(initialValues);
          setIsSubmit(true);

          // Navigate after successful login
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } catch (error) {
        notifications.show({
          title: "Error",
          message: error.response?.data?.message || "Login failed. Please check your credentials.",
          color: "red",
          autoClose: 5000,
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log("Form is valid:", formValues);
    }
  }, [formErrors, isSubmit, formValues]);

  return (
    <div className="h-screen grid lg:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Sign in to your account</p>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handalSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Username</span>
              </label>
              <div className="relative border rounded-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  name="username"
                  className="input h-10 w-full pl-10"
                  placeholder="Johndoe"
                  value={formValues.username}
                  onChange={handalChange}
                />
              </div>
            </div>
            {formErrors.username && (
              <p className="text-red-500 text-sm mt-1">{formErrors.username}</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative border rounded-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input h-10 w-full pl-10"
                  placeholder="••••••••"
                  value={formValues.password}
                  onChange={handalChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>
            {formErrors.password && (
              <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
            )}
            <Button
              color="#2e6f40"
              type="submit"
              variant="filled"
              disabled={isLoading}
              leftSection={isLoading ? <Loader size="sm" color="white" /> : null}
            >
              {isLoading ? "Login..." : "Login"}
            </Button>
          </form>
          <div className="text-center">
            <p className="text-base-content/60">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="link link-primary text-[#2e6f40]">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Right Side - Image/Pattern */}
      <AuthImagePattern
        title={"Welcome back!"}
        subtitle={
          "Sign in securely and continue where you left off. Fast, simple, and seamless access to your account."
        }
      />
    </div>
  );
};

export default Login;
