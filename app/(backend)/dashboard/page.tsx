"use client";

import { Kpi3, Kpi4 } from "@components";
import {
  getKeyValue,
  Snippet,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@heroui/react";
import { useAuth } from "@hooks/useAuth";
import api from "@lib/api";
import { getChatTable } from "@requests/getChatTable";
import { useEffect, useState } from "react";

const columns = [
  {
    key: "id",
    label: "Id",
  },
  {
    key: "messages",
    label: "Query",
  },
  {
    key: "chat_length",
    label: "Chat length",
  },
  {
    key: "timestamp",
    label: "Date",
  },
];

export default function Page() {
  const { user, token } = useAuth();
  const [nTokens, setNTokens] = useState<number>(0);
  const [nQueries, setNQueries] = useState<number>(0);
  const [lastWeekUsage, setLastWeekUsage] = useState<number[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const response = await api.get("/transactions/");
      setNTokens(response.data.meta.total_tokens);
      setNQueries(response.data.meta.usage_count);
      setLastWeekUsage(response.data.meta.usage_days);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await getChatTable()
      setRows(response.data);
    })();
  }, []);

  return (
    <div className="flex flex-col w-full p-6 md:p-10 gap-4 lg:gap-8">
      <h2 className="text-lg">Dashboard</h2>
      <div className="flex justify-between">
        <h1 className="text-2xl capitalize">Welcome {user}</h1>
        <div className="flex flex-col">
          <span className="text-sm">Login Token</span>
          <Snippet className="text-default-foreground" size="sm" hideSymbol>
            {token}
          </Snippet>
          <Tooltip placement="bottom" content={`comit login ${token}`}>
            <span className="text-sm text-right mt-2 cursor-pointer">
              How to use ?
            </span>
          </Tooltip>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-fit">
        <Kpi3
          data={{
            title: "Usage graph per time",
            value: nQueries,
            chart: lastWeekUsage,
          }}
        />
        <Kpi4
          data={{
            title: "Tokens usage graph",
            value: nTokens,
            percentage: (nTokens / 10e5) * 10e2,
          }}
        />
      </div>
      <Table
        color="secondary"
        aria-label="Example table with dynamic content"
        classNames={{ th: "bg-primary-700" }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => 
                {
                item.timestamp = new Date(item.timestamp).toLocaleDateString(); 
                if (item.id) item.id = item.id.split("_")[1]
                return <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              }
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
