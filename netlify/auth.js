exports.handler = async (event, context) => {
  const { user } = context.clientContext

  // Check if the user is authenticated
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Unauthorized" }),
    }
  }

  // Get the requested page's path from the event
  const requestedPath = event.path

  // Define an array of paths that should be protected
  const protectedPaths = ["/work"]

  // Check if the requested path is in the protectedPaths array
  if (protectedPaths.includes(requestedPath)) {
    // You can also check user roles or any custom logic here
    // For example, if you have roles like "admin" and "user":
    // if (!user.app_metadata.roles.includes("admin")) {
    //   return {
    //     statusCode: 403,
    //     body: JSON.stringify({ message: "Forbidden" }),
    //   };
    // }

    // If the user is authenticated and has access, allow access
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Authenticated" }),
    }
  }

  // If the requested path is not in protectedPaths, allow access
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Authenticated" }),
  }
}
