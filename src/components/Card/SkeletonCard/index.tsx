import ContentLoader, {
  Rect,
  IContentLoaderProps
} from 'react-content-loader/native';

export function SkeletonCard({ ...props }: IContentLoaderProps) {
  return (
    <ContentLoader
      speed={2}
      width={380}
      height={200}
      viewBox="0 0 380 200"
      backgroundColor="#ffff"
      foregroundColor="#979797"
      style={{ marginBottom: 16 }}
      {...props}>
      <Rect x="0" y="0" rx="16" ry="16" width="380" height="200" />
    </ContentLoader>
  );
}
