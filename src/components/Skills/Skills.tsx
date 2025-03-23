import { HardSkills } from './HardSkills';
import { SoftSkills } from './SoftSkills';

export const Skills: React.FC = () => {

  return (
    <div id="Skills" className="Skills py-10">
      <div className="flex justify-center items-center gap-4 mb-8 mt-8">
        <h2 className="text-3xl font-semibold text-center">Mes compétences</h2>
      </div>

      <div className="container mx-auto px-2">
          <HardSkills />
      </div>

      <div className="container mx-auto px-2 mt-12">
          <SoftSkills />
      </div>
    </div>
  );
};
