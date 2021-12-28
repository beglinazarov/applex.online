import React from 'react'

export default function AppListItem(props) {
  const {
    id,
    creatorImgRef,
    creatorName,
    price,
    releaseDate,
    appStatus,
    actions,
  } = props
  return (
    <tr>
      <th className="p-3">{id}</th>
      <td className="p-3">
        <a href="#" className="text-primary">
          <div className="d-flex align-items-center">
            <img
              src={creatorImgRef}
              className="avatar avatar-ex-small rounded-circle shadow"
              alt=""
            />
            <span className="ms-2">{creatorName}</span>
          </div>
        </a>
      </td>
      <td className="text-center p-3">{price}</td>
      <td className="text-center p-3">{releaseDate}</td>
      <td className="text-center p-3">
        <div className="badge bg-soft-danger rounded px-3 py-1">
          {appStatus}
        </div>
      </td>
      <td className="text-end p-3">
        <a href="#" className="btn btn-sm btn-primary">
          {actions}
        </a>
      </td>
    </tr>
  )
}
