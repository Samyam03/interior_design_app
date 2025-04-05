import { database } from '@/config/database'
import { Users } from '@/config/schema'
import axios from 'axios'
import { NextResponse } from 'next/server'
import { eq } from 'drizzle-orm'

export async function POST(req) {

    const  {user}= await req.json()

    //If User Already Exists
    try {
        const userInfo = await database.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress.emailAddress))
        
        console.log("User",userInfo)

        if(userInfo?.length== 0){
           const SaveResult = await database.insert(Users).values({
            name:user?.fullName,
            email:user?.primaryEmailAddress.emailAddress,
            imageUrl: user?.imageUrl,
           
           }).returning({Users})
           
           return NextResponse.json({'result':SaveResult[0]})
        }
        return NextResponse.json({'result':userInfo[0]})
    }
    catch (error) {
        return NextResponse.json({error:error.message})
    }

    //IF User Does Not Exist


   
}