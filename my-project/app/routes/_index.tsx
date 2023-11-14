import type { MetaFunction } from "@remix-run/node";
import FeatureGrid from "~/components/FeatureGrid";
import Toggle from "~/components/Toggle";

export const meta: MetaFunction = () => {
  return [
    { title: "Feature flags dashboard" },
    { name: "description", content: "Feature flags dashboard!" },
  ];
};

// const features = [
//   {
//     name: 'TCPA Pop-up',
//     description: 'This feature enables/disables tcpa pop up in frontend',
//     team: 'Frontend',
//   },
// ]

// export const FeatureGrid = () =>{
//   return (
//     <div className="px-4 sm:px-6 lg:px-8">
//       <div className="sm:flex sm:items-center">
//         <div className="sm:flex-auto">
//           <h1 className="text-base font-semibold leading-6 text-gray-900">Feature Flags Dashboard</h1>
          
//         </div>
//       </div>
//       <div className="mt-8 flow-root">
//         <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//           <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//             <table className="min-w-full divide-y divide-gray-300">
//               <thead>
//                 <tr>
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     Feature
//                   </th>
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     Toggle
//                   </th>
//                   <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                     Teams
//                   </th>
//                   <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
//                     <span className="sr-only">Edit</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-200 bg-white">
//                 {features.map((feature) => (
//                   <tr key={feature.name}>
//                     <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
//                       <div className="text-gray-900">{feature.name}</div>
//                       <div className="mt-1 text-gray-500">{feature.description}</div>
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
//                       <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
//                         Active
//                       </span>
//                     </td>
//                     <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
//                       <span className="inline-flex items-center rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700">
//                         {feature.team}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function Index() {
  return (
    <h1 className="text-3xl font-bold underline">
      <FeatureGrid />
    </h1>
  )
}
