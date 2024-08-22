import React from "react";
import styles from "./blog.module.css";
import BlogComponent from "@/components/BlogComponent/BlogComponent";
import heroImg from "../../public/building2.jpeg";

function page() {
  let descrption =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, dolorum nihil tenetur eaque exercitationem quasi officiis vitae inventore ipsum ullam obcaecati eveniet sunt eligendi provident magnam minima assumenda tempora odit reiciendis est ab sint quod possimus error. Esse, deserunt numquam quod soluta perspiciatis praesentium minus aliquid repellat deleniti atque corrupti? ";
  return (
    <>
    <div className={styles.blogsCtn}>
    <BlogComponent
        src={heroImg}
        mini_description={descrption}
        time={5}
      />
      <BlogComponent
        src={heroImg}
        mini_description={descrption}
        time={5}
      />
      <BlogComponent
        src={heroImg}
        mini_description={descrption}
        time={5}
      />
      <BlogComponent
        src={heroImg}
        mini_description={descrption}
        time={5}
      />
      <BlogComponent
        src={heroImg}
        mini_description={descrption}
        time={5}
      />
      <BlogComponent
        src={heroImg}
        mini_description={descrption}
        time={5}
      />


    </div>
      
    </>
  );
}

export default page;
