function header(){
    return(
        <div class="bg-purple-800">
  <div class="border py-3 px-6">
    <div class="flex justify-between">
      <div class="flex items-center">
        <span class="ml-2 text-3xl font-bold text-amber-300">R U Die?</span>
      </div>
      <div class="flex gap-x-4">
      <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-purple-900">
          <span class="text-sm font-medium text-amber-300">Sign up</span>
        </div>
        <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-purple-900">
          <span class="text-sm font-medium text-amber-300">Sign in</span>
        </div>
        </div>
      </div>
    </div>
  </div>
    );
}


export default header;