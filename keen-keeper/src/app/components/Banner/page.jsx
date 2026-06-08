import { Plus } from "lucide-react";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col gap-5 mb-10">
      <div className="flex flex-col justify-center items-center h-65 gap-3 bg-red-400">
        <h1 className="text-5xl font-bold">
          Friends to keep close in your life
        </h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className="btn btn-primary">
          <Plus /> Add a Friend
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div className="shadow-card rounded-xl text-center py-8 bg-blue-950">
          10
          <br />
          Total Friends
        </div>
        <div className="shadow-card rounded-xl text-center py-8 bg-blue-950">
          10
          <br />
          On Track
        </div>
        <div className="shadow-card rounded-xl text-center py-8 bg-blue-950">
          10
          <br />
       Need Attention
        </div>
        <div className="shadow-card rounded-xl text-center py-8 bg-blue-950">
          10
          <br />
          Interactions This Month
        </div>
      </div>
    </div>
  );
};

export default Banner;
