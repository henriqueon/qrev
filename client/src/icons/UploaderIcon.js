function UploaderIcon({ width = '20px', fill = '#7F7F83' }) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99992 13.3333C9.76381 13.3333 9.56575 13.2533 9.40575 13.0933C9.24575 12.9333 9.16603 12.7356 9.16659 12.5V6.54167L7.60409 8.10417C7.43742 8.27083 7.24298 8.35417 7.02075 8.35417C6.79853 8.35417 6.59714 8.26389 6.41659 8.08333C6.24992 7.91667 6.1702 7.71889 6.17742 7.49C6.18464 7.26111 6.26436 7.07 6.41659 6.91667L9.41659 3.91667C9.49992 3.83333 9.5902 3.77444 9.68742 3.74C9.78464 3.70556 9.88881 3.68806 9.99992 3.6875C10.111 3.6875 10.2152 3.705 10.3124 3.74C10.4096 3.775 10.4999 3.83389 10.5833 3.91667L13.5833 6.91667C13.7499 7.08333 13.8299 7.28139 13.8233 7.51083C13.8166 7.74028 13.7366 7.93111 13.5833 8.08333C13.4166 8.25 13.2185 8.33694 12.9891 8.34417C12.7596 8.35139 12.5619 8.27139 12.3958 8.10417L10.8333 6.54167V12.5C10.8333 12.7361 10.7533 12.9342 10.5933 13.0942C10.4333 13.2542 10.2355 13.3339 9.99992 13.3333ZM4.99992 16.6667C4.54159 16.6667 4.14909 16.5033 3.82242 16.1767C3.49575 15.85 3.3327 15.4578 3.33325 15V13.3333C3.33325 13.0972 3.41325 12.8992 3.57325 12.7392C3.73325 12.5792 3.93103 12.4994 4.16659 12.5C4.4027 12.5 4.60075 12.58 4.76075 12.74C4.92075 12.9 5.00048 13.0978 4.99992 13.3333V15H14.9999V13.3333C14.9999 13.0972 15.0799 12.8992 15.2399 12.7392C15.3999 12.5792 15.5977 12.4994 15.8333 12.5C16.0694 12.5 16.2674 12.58 16.4274 12.74C16.5874 12.9 16.6671 13.0978 16.6666 13.3333V15C16.6666 15.4583 16.5033 15.8508 16.1766 16.1775C15.8499 16.5042 15.4577 16.6672 14.9999 16.6667H4.99992Z"
        fill={fill}
      />
    </svg>
  );
}

export default UploaderIcon;
