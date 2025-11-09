import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

// POST /api/contact - Submit contact form
export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          message: 'Please provide all required fields: name, email, and message',
        },
        { status: 400 }
      );
    }

    // Email validation (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          message: 'Please provide a valid email address',
        },
        { status: 400 }
      );
    }

    // Create new contact entry
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    // Save to database
    const savedContact = await newContact.save();

    // Send success response
    return NextResponse.json(
      {
        message: 'Contact form submitted successfully',
        contact: {
          id: savedContact._id,
          name: savedContact.name,
          email: savedContact.email,
          createdAt: savedContact.createdAt,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error submitting contact form:', error);

    // Handle duplicate email error (if you have unique constraint)
    if (error.code === 11000) {
      return NextResponse.json(
        {
          message: 'A contact with this email already exists',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: 'Failed to submit contact form',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

// GET /api/contact - Get all contact submissions (optional, for admin use)
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // In production, add authentication/authorization middleware here
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-__v'); // Exclude version key

    return NextResponse.json(
      {
        message: 'Contacts retrieved successfully',
        count: contacts.length,
        contacts,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch contacts',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

