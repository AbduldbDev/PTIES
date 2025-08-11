// const TableCell: React.FC<TableCellProps> = ({
//   children,
//   isHeader = false,
//   className = '',
//   sortable = false,
//   sortDirection = null,
//   onClick,
// }) => {
//   const CellTag = isHeader ? 'th' : 'td';
  
//   return (
//     <CellTag 
//       className={`${className} ${sortable ? 'cursor-pointer' : ''}`}
//       onClick={onClick}
//     >
//       {isHeader && sortable ? (
//         <div className="flex items-center">
//           {children}
//           <SortIndicator direction={sortDirection} />
//         </div>
//       ) : (
//         children
//       )}
//     </CellTag>
//   );
// };