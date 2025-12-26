import InfiniteScroll from "react-infinite-scroll-component";

function ProjectCard({ projects, loadMore, hasMore }) {
  return (
    <section className="mx-auto max-w-1440px pt-12 px-4">
      <InfiniteScroll
        dataLength={projects.length}
        next={loadMore}
        hasMore={hasMore}
        loader={
          <p className="py-6 text-center text-sm text-gray-500">
            Loading more projects...
          </p>
        }
        endMessage={
          <p className="py-6 text-center text-sm text-gray-400">
            No more projects
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="rounded-[28px] bg-[#f3f3f3] p-6 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)]"
            >
              <h2 className="text-lg font-semibold">{project.projectName}</h2>
              <p className="text-xs text-gray-600">{project.projectId}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
}

export default ProjectCard;
