import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token');
    const username = cookieStore.get('username');

    if (!token || !username) {
        return NextResponse.json({ user: null }, { status: 401 });
    }

    return NextResponse.json({ user: username.value });
}
