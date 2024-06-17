import { LOGIN } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useNavigation } from "react-router-dom";
import * as yup from "yup";

type LoginData = {
  taxId: string;
  password: string;
};

export function useLogin() {
  const [Login] = useMutation(LOGIN);
  const navigation = useNavigate();
  const loginSchema = yup.object().shape({
    taxId: yup
      .string()
      .min(11, "TaxId precisa ter mias de onze caracteres")
      .required(),
    password: yup
      .string()
      .min(6, "Password precisa ter mias de onze caracteres")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (formValues: LoginData) => {
    try {
      const response = await Login({
        variables: {
          login: {
            taxId: formValues.taxId,
            password: formValues.password,
          },
        },
      });

      localStorage.setItem("taxId", response.data.login.user.taxId);
      localStorage.setItem("token", response.data.login.token);
      navigation("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    errors,
    onSubmit: handleSubmit(onSubmit),
  };
}
