import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function SkeletonCard() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="w-sm h-70 bg-gray-500 rounded-2xl p-6 shadow-lg">
        <div className="mb-6 flex items-center gap-4">
          <Skeleton circle={true} height={64} width={64} />
          <div className="flex flex-col gap-1">
            <Skeleton height={20} width={180} />
            <Skeleton height={15} width={50} />
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <Skeleton height={15} width={70} />
          <div className="flex gap-2">
            <Skeleton height={15} width={100} />
            <Skeleton height={15} width={100} />
            <Skeleton height={15} width={100} />
          </div>
          <div>
            <Skeleton height={15} width={40} />
            <Skeleton height={15} width={100} />
          </div>
          <div>
            <Skeleton height={15} width={40} />
            <Skeleton height={15} width={150} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default SkeletonCard;
