// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { PageProps } from "@/types";
// import { Head } from "@inertiajs/react";

// export default function Dashboard({ auth }: PageProps) {
//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={
//                 <h2 className="font-semibold text-xl leading-tight">
//                     Dashboard
//                 </h2>
//             }
//         >
//             <Head title="Dashboard" />

//             <div className="flex flex-col gap-4 md:gap-8"></div>
//         </AuthenticatedLayout>
//     );
// }


import { HomeComponent } from "@/Components/Home";
import { Head } from "@inertiajs/react";

const Home = () => {
  return (
    <>
      <Head title="Home" />
      <HomeComponent />
    </>
  );
};

export default Home;