function StorePage() {
  return <div className="flex flex-col min-h-screen h-full w-full">
    <div className="flex-1">Navbar</div>
    <div className="flex-1">Store</div>
    <div className="flex w-full flex-1">
      <div className="flex flex-col border border-black p-5">
        <div className="flex flex-1">Store</div>
        <div className="flex flex-1">Store</div>
        <div className="flex flex-1">Store</div>
        <div className="flex flex-1">Store</div>
        <div className="flex flex-1">Store</div>
      </div>
      <div className="flex flex-wrap content-between flex-1">
        <div className="w-1/3 h-40 flex justify-center items-center border border-black">Store1</div>
        <div className="w-1/3 h-40 flex justify-center items-center border border-black">Store2</div>
        <div className="w-1/3 h-40 flex justify-center items-center border border-black">Store3</div>
        <div className="w-1/3 h-40 flex justify-center items-center border border-black">Store4</div>
        <div className="w-1/3 h-40 flex justify-center items-center border border-black">Store5</div>
        <div className="w-1/3 h-40 flex justify-center items-center border border-black">Store6</div>
        <div className="w-1/3 h-40 flex justify-center items-center border border-black">Store7</div>
        <div className="w-1/3 h-40 flex justify-center items-center border border-black">Store8</div>
        <div className="w-1/3 h-40 flex justify-center items-center border border-black">Store9</div>
      </div>
    </div>
    <div className="flex flex-1 mt-auto">Footer</div>
  </div>
}

export default StorePage;
