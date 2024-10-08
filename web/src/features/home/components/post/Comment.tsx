import Image from '@/components/Image'
import { type Comment as IComment } from '@/apis/post'

interface CommentProps {
    comment: IComment
}

export default function Comment({ comment }: CommentProps) {
    return (
        <>
            <div className="my-2 flex space-x-1">
                <Image src={comment.user.avatar} alt="User Avatar" className="size-6 rounded-full" />
                <div className="w-fit rounded-3xl bg-gray-100 px-4 py-2">
                    <p className="font-semibold text-gray-800">{comment.user.fullName}</p>
                    <p className="text-sm text-gray-700">{comment.content}</p>
                </div>
            </div>
        </>
    );
}
