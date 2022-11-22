import React from "react";
import RatingAdjust from "./RatingAdjust";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

const Comment = ({ comment }) => {
  return (
    <div className="flex gap-[40px]">
      <div className="flex items-center mr-10">
        <img
          className="rounded-full w-16 mr-4"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAMFBMVEXFxcX////CwsL4+PjU1NTv7+/8/Pzf39/IyMja2trLy8vPz8/z8/Pp6enl5eXX19el4fprAAACj0lEQVRoge2a3bKCMAyEIWApVPD93/aIyIiCNEk3duZMvyvvdlqSzU+tqkKhUCgUCoVC4b9DRD6Etm2Dv//8qXIVukvj6gfOXbu2+pE+0TA19QfN+BN9CpdP5YVrb61OfjyWfsgHU3nqvkvPjHbq5L/c+ObbWx2ehl2c7XGtiToFF9e+czNQp4ElbaPueeeewd/8la1dO4+VppP03nOFHp1aiXZdd0h1YiTZG0jtXqgNtTp+pK8ElDTdxNr1BDt61NL3wNKN7W1bQD4Xq6PHXEDiAnN70WDu3UuTfAET70GlXWNaOkWizUB8RhdvoOpCU05xUTV90RTxJHHlN8eI54z2SthCrWCKalaHU3p7i9CuSNFLwKpa1nqetZPJ28NJ55UZXPdK8r59QGlnnljEsxp0TBW6HHRKFZY27HxeyTYTuGh7InB4/E4m6zaKrW6hnXcDydq9Wi6eqTs32tF045913079yc1fesOnntNjP+/d28jTMDIqqxsHvDz5iVnU3YQ+PbWCotpgc13aPaNa14r/wLHBobJO3kTNYKYl7YiM6F+1uwFEE6kb1BZSwy5FO1Vdf+cLKTefqp2irt3GbFF38Mp9yDvK5TMhtJWTU1qgv9CEvM5Uj1AY7SCfyb8gn55Qlz4jvXjNJuQ7wuZCvA04RbYDRtjLFpHVKDZApziBOPrgoqOjDy45uubJOgZ7akfm+Ao711WL3hhMm9O2q+cwm1nly0IE5vIf6qwvWM8e6Y3bMbx2zuTW7/fO0YZ0bkcwujm8ta4wLFb39wwOjF003tdXGP5u9skZHx3XtO6JtrE23roQdViLirYSrWx28caIONCAdkw03C3FY9qGmRbNNeyk8klkcrFM832i/wHluSCt5tlTgwAAAABJRU5ErkJggg=="
          alt=""
        />
        <div className="flex flex-col">
          <div className="p-2">John</div>
          <RatingAdjust number={5} />
        </div>
      </div>
      <div className="my-4">
        <div className="w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          numquam est porro excepturi, beatae molestiae, inventore in aut fugit
          praesentium exercitationem ducimus ab magnam voluptatum!
        </div>
        <div className="flex items-center ">
          <div className="mr-4 flex items-center mt-5">
            <ThumbUpOutlinedIcon className="mr-1" />
            <div>5</div>
          </div>
          <div className="flex items-center mr-4 mt-5">
            <ThumbDownAltOutlinedIcon className="mr-1" />
            <div>4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
