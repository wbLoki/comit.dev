export default function UserChat(message: any) {
    return (
        <div className='flex items-start justify-end'>
            <div className='bg-blue-600 rounded-lg p-3 max-w-xs'>
                <p className='text-sm'>{message.message}</p>
            </div>
        </div>
    );
}
