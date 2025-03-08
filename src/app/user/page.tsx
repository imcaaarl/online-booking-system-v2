import Nav from "@/components/nav/Nav";
import Sidebar from "@/components/sidebar/Sidebar";
import Userlist from "@/components/usercomponent/Userlist";


export default function UserPage() {
  return (
     <div className="wrapper">
       <Sidebar />
       <div className="p-4 xl:ml-80">
         <Nav />
         <Userlist/>
       </div>
     </div>
   );
}
