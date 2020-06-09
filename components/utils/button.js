export default function Button({
  className,
  children,
  href,
  link,
  type,
  onClick,
  disabled,
}) {
  if (href) {
    return (
      <a className={className} as={link} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
