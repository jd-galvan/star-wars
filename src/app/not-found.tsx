import Link from "next/link"

function NotFound() {
  return (
    <div>
      <h2>This page doesn't exist, Jedi knight!</h2>
      <h3>Please, visit our home</h3>
      <Link href="/"><h2>Home</h2></Link>
    </div>
  )
}

export default NotFound