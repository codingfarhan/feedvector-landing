'use client';

import { CopyToClipboard } from '@/components/copy-to-clipboard';
import { cn } from '@/lib/utils';

type CopyBlockProps = {
  value: string;
  className?: string;
  codeClassName?: string;
  variant?: 'code' | 'inline';
};

export function CopyBlock({
  value,
  className,
  codeClassName,
  variant = 'code',
}: CopyBlockProps) {
  if (variant === 'inline') {
    return (
      <div
        className={cn(
          'mt-3 flex items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800 dark:border-white/10 dark:bg-white/5 dark:text-white/90',
          className
        )}
      >
        <code className={cn('break-all', codeClassName)}>{value}</code>
        <CopyToClipboard text={value} />
      </div>
    );
  }

  return (
    <div className={cn('mt-3 relative', className)}>
      <div className="absolute right-3 top-3 z-10">
        <CopyToClipboard text={value} />
      </div>
      <pre className="overflow-x-auto rounded-2xl border border-gray-200 bg-gray-50 p-4 pt-14 text-sm text-gray-800 dark:border-white/10 dark:bg-white/5 dark:text-white/90">
        <code className={codeClassName}>{value}</code>
      </pre>
    </div>
  );
}

