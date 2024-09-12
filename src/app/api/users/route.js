import { User } from "@/lib/models";
import { connectDB } from "@/lib/utils";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    // Parse the request body
    const { username, email, password } = await request.json();
    console.log({ username, email, password });

    // Connect to the database
    await connectDB();

    // Create a new user
    const user = new User({
      username,
      email,
      password,
    });

    // Save the user to the database
    const createdUser = await user.save();

    // Return a success response
    return NextResponse.json({
      message: "User created",
      user: createdUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);

    // Return an error response
    return NextResponse.json({
      message: "Could not create user",
    }, { status: 500 });
  }
};
