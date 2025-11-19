import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Define CSV file path
    const csvPath = path.join(process.cwd(), 'contact-submissions.csv')
    
    // Check if file exists, if not create with headers
    if (!fs.existsSync(csvPath)) {
      fs.writeFileSync(csvPath, 'Name,Email,Subject,Message,Timestamp\n', 'utf8')
    }

    // Escape commas and quotes in the message for CSV format
    const escapeCSV = (field: string) => {
      if (field.includes(',') || field.includes('"') || field.includes('\n')) {
        return `"${field.replace(/"/g, '""')}"`
      }
      return field
    }

    // Append new submission with timestamp
    const timestamp = new Date().toISOString()
    const newRow = `${escapeCSV(name)},${email},${escapeCSV(subject)},${escapeCSV(message)},${timestamp}\n`
    fs.appendFileSync(csvPath, newRow, 'utf8')

    // Here you can add email sending functionality later
    // For now, we're just storing to CSV
    // TODO: Send email to writetous@techviswa.com

    return NextResponse.json(
      { message: 'Thank you for contacting us! We will get back to you soon.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error saving contact submission:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}
