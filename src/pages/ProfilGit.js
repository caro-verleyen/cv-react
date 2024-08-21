import { useState, useEffect, React } from "react";
import axios from "axios";

const ProfilGit = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/github-john-doe")
      .then((res) => setUserData(res.data));
  }, []);
  return (
    <main>
      <section>
        <div>
          {userData && (
            <div className="text-center ">
              <ul className="list-unstyled fw-bold h1">
                Github user
                <li className=" fw-bold h3 mb-3">{userData.name}</li>
                <li className=" text-body mb-3 ">
                  <img
                    src={userData.avatar_url}
                    alt="image de profile"
                    height="200"
                    width="200"
                  />
                </li>
                <li className=" text-body h6 mb-3">{userData.bio}</li>
                <li className=" text-body h6 mb-3">
                  Abonnés:{userData.followers}
                </li>
                <li className=" text-body h6 mb-3">
                  Abonnements:{userData.following}
                </li>
                <li className=" text-body h6 mb-3">
                  Créé le:{userData.created_at}
                </li>
                <li className=" text-body h6 mb-3">
                  Modifié le:{userData.updated_at}
                </li>
                <li className=" text-body h6 mb-5">
                  URL repositories:
                  <a href="https://api.github.com/users/github-john-doe/repos">
                    {userData.repos_url}
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
export default ProfilGit;
