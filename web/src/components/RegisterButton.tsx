import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from './ui/dialog'
import { Input } from './ui/input'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/helpers/schema'
import { signUp } from '@/apis/auth'
import * as z from 'zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

export type RegisterInputs = z.infer<typeof registerSchema>

export default function RegisterButton() {
  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success('Sign up successfully')
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
  } = useForm<RegisterInputs>({
    mode: 'onBlur',
    resolver: zodResolver(registerSchema)
  })
  const onSubmit: SubmitHandler<RegisterInputs> = async (data: RegisterInputs) => {
    mutation.mutate({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName
    })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="mt-6" variant="green">
          Create New Account
        </Button>
      </DialogTrigger>
      <DialogContent className="w-106">
        <DialogHeader className="px-4">
          <DialogTitle className="text-left text-3xl">Sign Up</DialogTitle>
          <p className="text-left text-sm text-gray-600">It's quick and easy.</p>
        </DialogHeader>
        <form className="space-y-4 border-t border-gray-300 p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Input placeholder="First name" className="w-full rounded-md px-2" {...register('firstName')} />
              {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
            </div>
            <div>
              <Input placeholder="Last name" className="w-full rounded-md px-2" {...register('lastName')} />
              {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
            </div>
          </div>
          <Input placeholder="Email" className="w-full rounded-md px-2" {...register('email')} />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          <Input
            type="password"
            placeholder="New password"
            className="w-full rounded-md px-2"
            {...register('password')}
          />
          {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          <p className="text-xs text-gray-500">
            People who use our service may have uploaded your contact information to Facebook. Learn more.
          </p>
          <p className="text-xs text-gray-500">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS
            Notifications from us and can opt out any time.
          </p>
          <div className="flex justify-center">
            <Button type="submit" className="px-10 text-lg" variant="green">
              Sign Up
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
