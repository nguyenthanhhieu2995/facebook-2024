import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { useForm, SubmitHandler } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { checkIdentifyAccount } from '@/apis/auth'
import { AxiosError } from 'axios'
import { toast } from 'sonner'
import { forgotPasswordSchema } from '@/helpers/schema'
import { useNavigate } from 'react-router-dom'

export type ForgotPasswordInputs = z.infer<typeof forgotPasswordSchema>

export default function IdentifyAccount() {
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: checkIdentifyAccount,
    onSuccess: (data, variables) => {
      const mail = variables.email.split('@')[0]
      navigate(`/login/reset-password/?mail=${mail}`, {
        state: data
      })
    },
    onError: error => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
      }
    }
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ForgotPasswordInputs>({
    mode: 'onBlur',
    resolver: zodResolver(forgotPasswordSchema)
  })
  const onSubmit: SubmitHandler<ForgotPasswordInputs> = async (data: ForgotPasswordInputs) => {
    mutation.mutate({
      email: data.email
    })
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md border-none bg-white shadow-thin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader className="mb-2 border-b border-gray-300 p-4">
            <CardTitle className="text-2xl font-bold">Find Your Account</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-gray-600">
              Please enter your email address or mobile number to search for your account.
            </p>
            <Input type="text" placeholder="Email" className="w-full rounded-md px-4 py-3.5" {...register('email')} />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <div
              className="h-10 cursor-pointer rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
              onClick={() => navigate('/')}
            >
              Cancel
            </div>
            <Button type="submit">Search</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
