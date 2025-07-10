import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";


type RowData = {
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
};

const data: RowData[] = [
  {
    jobRequest: "Launch social media campaign...",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhry",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000 ₹",
  },
  {
    jobRequest: "Update press kit for company...",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanportfolio.com",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,500,000 ₹",
  },
  {
    jobRequest: "Finalize user testing feedback...",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnsondesigns.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: "4,750,000 ₹",
  },
  {
    jobRequest: "Design new features for the... " ,
    submitted: "10-01-2025",
    status: "complete",
    submitter: "Emily Green",
    url: "www.emilygreenart.com",
    assigned: "Tom wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "5,900,000 ₹",
  },
  {
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrowncreative.com",
    assigned: "Kevin smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000 ₹",
  },
  ...Array.from({ length: 20 }, () => ({
    jobRequest: "",
    submitted: "",
    status: "",
    submitter: "",
    url: "",
    assigned: "",
    priority: "",
    dueDate: "",
    estValue: "",
  })),

];

const columns: ColumnDef<RowData>[] = [
  {
    accessorKey: "jobRequest",
    header: () => (
      <div className="flex items-center gap-1">
        <img className="relative w-4 h-4" alt="Briefcase" src="https://c.animaapp.com/mclmkdkf288FZk/img/briefcase.svg"></img> Job Request
      <img className="relative  w-3 h-3" alt="Chevron" src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron.svg"></img>
      </div>
    ),
    size: 200,
  },
  {
    accessorKey: "submitted",
    header: () => (
      <div className="flex items-center gap-1">
       <img className="relative w-4 h-4" alt="Calendar" src="https://c.animaapp.com/mclmkdkf288FZk/img/calendar.svg"></img> Submitted
      <img className="relative w-3 h-3" alt="Chevron" src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron.svg"></img>
      </div>
    ),
    size: 120,
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="flex items-center gap-1">
        <img className="relative w-4 h-4" alt="Chevron circle" src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-circle.svg"></img> Status
     <img className="relative w-3 h-3" alt="Chevron" src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron.svg"></img>
      </div>
    ),
     cell: (info) => (
      <span className="text-[0.81rem]  text-black">
        {info.getValue() as string}
      </span>
    ),
     
    size: 120,
  },
  {
    accessorKey: "submitter",
    header: () => (
      <div className="flex items-center gap-1">
        <img className="relative w-4 h-4" alt="Person" src="https://c.animaapp.com/mclmkdkf288FZk/img/person.svg"></img> Submitter
    <img className="relative w-3 h-3" alt="Chevron" src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron.svg"></img>
      </div>
    ),
     cell: (info) => (
      <span className="text-sm  text-black">
        {info.getValue() as string}
      </span>
    ),
    size: 150,
  },
  {
    accessorKey: "url",
    header: () => (
      <div className="flex items-center gap-1">
       <img className="relative w-4 h-4" alt="Globe" src="https://c.animaapp.com/mclmkdkf288FZk/img/globe.svg"></img> URL
      <img className="relative w-3 h-3" alt="Chevron" src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron.svg"></img>
      </div>
    ),
    cell: (info) => {
      const value = info.getValue() as string;
      return (
        <a
          href={`https://${value}`}
          className="text-black hover:text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      );
    },
    size: 200,
  },
  {
    accessorKey: "assigned",
    header:() => (
      <div className="flex items-center gap-1">
      <img className="relative w-4 h-4" alt="Emoji" src="https://c.animaapp.com/mclmkdkf288FZk/img/emoji.svg"></img> Assigned
      </div>
    ) ,
    cell: (info) => (
      <span className="text-sm  text-black">
        {info.getValue() as string}
      </span>
    ),
    size: 150,
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: (info) => (
      <div className=" p-1 text-[0.81rem] rounded">{info.getValue() as string}</div>
    ),
    size: 120,
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: (info) => (
      <div className="p-1 rounded">{info.getValue() as string}</div>
    ),
    size: 120,
  },
  {
    accessorKey: "estValue",
    header: "Est. Value",
    cell: (info) => (
      <div className="p-1 rounded">{info.getValue() as string}</div>
    ),
    size: 120,
  },

  {
    id: "action",
    header: "",
    cell: () => (
      <button
        className="w-6 h-6 flex items-center justify-center rounded-full"
        title="Add"
      >
        
      </button>
    ),
  },
];

export default function Table() {
  const table = useReactTable<RowData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
  });

  return (
    <div className="">
      <table className="border border-gray-300 w-full">
        <thead className="sticky top-0">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    width: header.getSize(),
                    minWidth: header.getSize(),
                  }}
                  className="p-2 border text-[#757575] border-gray-300 text-left text-sm font-semibold bg-gray-100"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    width: cell.column.getSize(),
                    minWidth: cell.column.getSize(),
                  }}
                  className="p-2 border border-gray-200 text-xs"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
