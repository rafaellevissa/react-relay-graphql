import { CREATE_USER } from "@/graphql/mutations";
import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

type UserData = {
  name: string;
  taxId: string;
  password: string;
};

export function useRegisterUser() {
  const [CreateUser] = useMutation(CREATE_USER);
  const navigation = useNavigate();
  const userSchema = yup.object().shape({
    name: yup
      .string()
      .min(8, "Nome precisa ter mais de oito caracteres")
      .required(),
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
  } = useForm<UserData>({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (formValues: UserData) => {
    try {
      const response = await CreateUser({
        variables: {
          createUserUser: {
            name: formValues.name,
            taxId: formValues.taxId,
            password: formValues.password,
          },
        },
      });
      localStorage.setItem("user", response.data.createUser.user);
      localStorage.setItem("token", response.data.createUser.token);
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
