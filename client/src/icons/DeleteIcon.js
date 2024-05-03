function DeleteIcon({ width = 16, fill = 'rgba(233, 233, 233, 0.8)' }) {
  return (
    <svg
      width={width}
      height={(Number(width) * 13) / 12}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.5 5.25V9.75" stroke={fill} strokeLinecap="round" />
      <path d="M4.5 5.25V9.75" stroke={fill} strokeLinecap="round" />
      <path
        d="M3.625 1.125H3.5C3.56875 1.125 3.625 1.06875 3.625 1V1.125H8.375V1C8.375 1.06875 8.43125 1.125 8.5 1.125H8.375V2.25H9.5V1C9.5 0.448438 9.05156 0 8.5 0H3.5C2.94844 0 2.5 0.448438 2.5 1V2.25H3.625V1.125ZM11.5 2.25H0.5C0.223437 2.25 0 2.47344 0 2.75V3.25C0 3.31875 0.05625 3.375 0.125 3.375H1.06875L1.45469 11.5469C1.47969 12.0797 1.92031 12.5 2.45312 12.5H9.54688C10.0813 12.5 10.5203 12.0813 10.5453 11.5469L10.9312 3.375H11.875C11.9438 3.375 12 3.31875 12 3.25V2.75C12 2.47344 11.7766 2.25 11.5 2.25ZM9.42656 11.375H2.57344L2.19531 3.375H9.80469L9.42656 11.375Z"
        fill={fill}
      />
    </svg>
  );
}

export default DeleteIcon;
