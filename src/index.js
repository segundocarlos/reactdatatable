import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns, data, paginationComponentOptions} from "./data";

import "./styles.css";

function App() {
  const tableData = {
    columns,
    data
  };

  return (  
    <div class="content">
      
      <DataTableExtensions {...tableData} exportHeaders={true} filterPlaceholder ={"Filtrar Datos"} >
       
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          paginationComponentOptions = {paginationComponentOptions}
          highlightOnHover
        />
      </DataTableExtensions>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);