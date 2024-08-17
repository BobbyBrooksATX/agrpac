import Facebook from './Facebook';
import TruthSocial from './TruthSocial';
import Xcom from './X';
import Telegram from './Telegram';

interface SocialLinks {
  x?: string;
  facebook?: string;
  telegram?: string;
  truthSocial?: string;
}

interface TeamMemberProps {
  imageSrc?: string; // Make imageSrc optional
  name: string;
  title: string;
  socialLinks?: SocialLinks;
}

const TeamMember: React.FC<TeamMemberProps> = ({ imageSrc, name, title, socialLinks }) => {
  return (
    <div className="text-center">
      {imageSrc && <img src={imageSrc} alt={`${name}'s photo`} className="w-24 h-24 rounded-full mx-auto mb-4" />}
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-500">{title}</p>
      <div className="flex justify-center space-x-4 mt-4">
        {socialLinks?.facebook && (
          <a href={socialLinks.facebook} aria-label="Facebook">
            <Facebook className="w-8 M-8 text-blueAGR fill-blueAGR hover:text-redAGR hover:fill-redAGR dark:fill-redAGR dark:hover:fill-blueAGR" />
          </a>
        )}
        {socialLinks?.x && (
          <a href={socialLinks.x} aria-label="X">
            <Xcom className="w-8 M-8 rounded-full text-blueAGR fill-blueAGR hover:text-redAGR hover:fill-redAGR dark:fill-redAGR dark:hover:fill-blueAGR" />
          </a>
        )}
        {socialLinks?.telegram && (
          <a href={socialLinks.telegram} aria-label="Telegram">
            <Telegram className="w-8 M-8 text-blueAGR fill-blueAGR hover:text-redAGR hover:fill-redAGR dark:fill-redAGR dark:hover:fill-blueAGR" />
          </a>
        )}
        {socialLinks?.truthSocial && (
          <a href={socialLinks.truthSocial} aria-label="TruthSocial">
            <TruthSocial className="w-8 M-8 text-blueAGR fill-blueAGR hover:text-redAGR hover:fill-redAGR dark:fill-redAGR dark:hover:fill-blueAGR" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
