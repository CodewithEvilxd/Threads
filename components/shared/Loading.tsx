'use client';

export function Loading() {
	return (
		<div className='flex flex-col justify-center items-center w-screen h-screen bg-dark-4'>
			<div
				className='text-primary-500 h-[150px] w-[150px] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
				role='status'
			>
				<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
					Loading...
				</span>
			</div>
		</div>
	);
}
