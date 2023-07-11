import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardTitleProductSkeleton() {
  return (
    <SkeletonTheme baseColor="#dddddd" highlightColor="#b3b3b3">
      <h1>
        <Skeleton width={200} height={40} />
      </h1>
      <h1>
        <Skeleton width={200} height={40} />
      </h1>
      <h1>
        <Skeleton width={200} height={40} />
      </h1>
    </SkeletonTheme>
  );
}
