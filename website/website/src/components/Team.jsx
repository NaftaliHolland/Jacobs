import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const employees = [
  {
    name: "Mr. Willis Atieno",
    title: "Founder and CEO",
    image: "/placeholder.svg?height=100&width=100",
    description: "As the visionary behind Jacob's, Mr Willis has been at the helm since day one, driving the company’s mission to provide the purest and highest-quality bottled water. He combines a passion for sustainability and a commitment to excellence, ensuring that every bottle reflects our core values of purity, innovation, and trust",
    contact: "+254 721153952",
    initials: "WA"
  },
  {
    name: "Mr. Tobias",
    title: "role",
    image: "/placeholder.svg?height=100&width=100",
    description: "",
    contact: "+254 74444444",
    initials: "TO"
  },
  {
    name: "Mr Henry Ondiala",
    title: "Logistics and Transport Manager",
    image: "/placeholder.svg?height=100&width=100",
    description: "Mr Henry is the backbone of our distribution network ensuring our products reach customers on time and in perfect condition.",
    contact: "+254 7444444",
    initials: "HO"
  },
  {
    name: "Erick Otieno",
    title: "role",
    image: "/placeholder.svg?height=100&width=100",
    description: "",
    contact: "+254 7444444",
    initials: "EO"
  },
]

const Team = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {employees.map((employee, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={employee.image} alt={employee.name} />
                <AvatarFallback>{employee.initials}</AvatarFallback>
              </Avatar>
              <CardTitle>{employee.name}</CardTitle>
              <CardDescription>{employee.title}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-center text-sm text-muted-foreground">{employee.description}</p>
            </CardContent>
            <CardFooter className="justify-center">
              <p className="text-center text-sm text-muted-foreground">{employee.contact}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default Team;
