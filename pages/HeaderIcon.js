function HeaderIcon({ Icon, title }) {
  return (
    <div className="cursor-pointer group flex flex-col items-center ">
      <Icon className="h-8 ml-0 mt-1 group-hover:animate-bounce " />
      <p className="opacity-0 hover:opacity-100">{title}</p>
    </div>
  );
}

export default HeaderIcon;
