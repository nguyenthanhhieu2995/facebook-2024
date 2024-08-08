import RegisterButton from '@/components/RegisterButton'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/helpers/schema'
import { login } from '@/apis/auth'
import { setToken } from '@/helpers/token'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export type LoginInputs = z.infer<typeof loginSchema>

export default function Login() {
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: res => {
      setToken(res.token)
      document.location.reload()
    },
    onError: error => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
      }
    }
  })
console.log(mutation.data)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginInputs>({
    mode: 'onBlur',
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginInputs) =>
    mutation.mutate({
      email: data.email,
      password: data.password
    })

  return (
    <div className="m-auto flex items-center justify-center space-y-3 lg:p-32">
      <div className="container flex flex-col items-center space-y-10 md:flex-row md:justify-between">
        <div className="flex w-1/2 flex-col space-y-3">
          <h1 className="text-6xl font-bold text-primary">facebook</h1>
          <p className="text-2xl font-medium">
            Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-12 w-fit rounded-xl bg-white shadow-lg">
            <form className="w-fit space-y-3 p-4" onSubmit={handleSubmit(onSubmit)}>
              <Input
                {...register('email')}
                className="w-99 px-4 py-3.5"
                placeholder="Email address and phone number"
                type="email"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              <Input {...register('password')} className="w-99 px-4 py-3.5" placeholder="Password" type="password" />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
              <Button
                loading={mutation.isPending}
                className="w-full py-7 text-2xl font-bold text-white"
                size="lg"
                type="submit"
              >
                Login
              </Button>
            </form>
            <div className="flex flex-col items-center justify-center space-y-4 px-4 pb-4">
              <p className="cursor-pointer text-center text-sm text-primary">Forgot password?</p>
              <div className="h-[1px] w-full rounded-full bg-[#E6E8EA]"></div>
              <RegisterButton />
            </div>
          </div>
          <p className="font-primary text-center">
            <span className="font-bold">Create a Page for a celebrity, brand or business. </span>
          </p>
        </div>
      </div>
    </div>
  )
}
