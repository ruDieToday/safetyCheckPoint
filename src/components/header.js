import SignUP from './SignUP'
import SignIN from './SignIN';

function header(){
    return(
        <div class="bg-purple-800">
  <div class="border py-3 px-6">
    <div class="flex justify-between">
      <div class="flex items-center">
        <span class="ml-2 text-3xl font-bold text-amber-300">R U Die?</span>
      </div>
      <div class="flex gap-x-4">
      <SignUP/>
        <SignIN/>
        </div>
      </div>
    </div>
  </div>
    );
}


export default header;