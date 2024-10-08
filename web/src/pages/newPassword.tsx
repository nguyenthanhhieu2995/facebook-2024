import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { newPasswordSchema } from '@/helpers/schema'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'
import { updatePassword } from "@/apis/auth"
import { useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export type NewPasswordInputs = z.infer<typeof newPasswordSchema>
const NewPassword = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const accessToken = searchParams.get('access-token')
  console.log(accessToken)
  const mutation = useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      toast.success('Update password successfully')
      navigate('/login')
    },
    onError: error => {
      if (error instanceof AxiosError) {
        toast.error(error.message)
      }
    }
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NewPasswordInputs>({
    mode: 'onBlur',
    resolver: zodResolver(newPasswordSchema)
  })
  const onSubmit: SubmitHandler<NewPasswordInputs> = async (data: NewPasswordInputs) => {
    if (accessToken) {
      mutation.mutate({
        newPassword: data.newPassword,
        accessToken: accessToken
      })
    }
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md border-none bg-white shadow-thin">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader className="mb-2 border-b border-gray-300 p-4">
            <CardTitle className="text-2xl font-bold">Update new password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input type="password" placeholder="New Password" {...register('newPassword')} className="w-full rounded-md px-4 py-3.5"/>
            <Input type="password" placeholder="Confirm new password" {...register('confirmNewPassword')} className="w-full rounded-md px-4 py-3.5"/>
            {errors.confirmNewPassword && <p className="text-red-500">{errors.confirmNewPassword.message}</p>}
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button variant="secondary">Cancel</Button>
            <Button type="submit">Update</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default NewPassword