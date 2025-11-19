import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Define CSV file path
    const csvPath = path.join(process.cwd(), 'waitlist.csv')
    
    // Check if file exists, if not create with headers
    if (!fs.existsSync(csvPath)) {
      fs.writeFileSync(csvPath, 'Email,Timestamp\n', 'utf8')
    }

    // Read existing file to check for duplicates
    const existingData = fs.readFileSync(csvPath, 'utf8')
    if (existingData.includes(email)) {
      return NextResponse.json(
        { message: 'Email already registered' },
        { status: 200 }
      )
    }

    // Append new email with timestamp
    const timestamp = new Date().toISOString()
    const newRow = `${email},${timestamp}\n`
    fs.appendFileSync(csvPath, newRow, 'utf8')

    return NextResponse.json(
      { message: 'Successfully added to waitlist!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving email:', error)
    return NextResponse.json(
      { error: 'Failed to save email' },
      { status: 500 }
    )
  }
}
