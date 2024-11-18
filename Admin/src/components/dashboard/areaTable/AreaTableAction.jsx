import React from "react";
import { HiDotsHorizontal } from "react-icons/hi";

const AreaTableAction = ({ id, onAccess, onDelete }) => {
  return (
    <div className="area-table-action">
      <button className="btn-access" onClick={() => onAccess(id)}>
        Chấp Nhận
      </button>
      <button className="btn-delete" onClick={() => onDelete(id)}>
        Xóa
      </button>
    </div>
  );
};

export default AreaTableAction;
