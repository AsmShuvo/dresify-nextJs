import Image from 'next/image';
import Link from 'next/link';

const Product = ({post}) => {
    return (
        <div>
            <Link href={`/blog/${post.id}`} className="p-8 max-w-lg  rounded-2xl hover:shadow hover:shadow-indigo-50 flex flex-col items-center border border-blue-950">
                <Image src="https://images.unsplash.com/photo-1725961476494-efa87ae3106a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="shadow-sm rounded-lg overflow-hidden" width={400} height={500} />
                <div className="mt-8">
                    <h4 className="font-bold text-xl">{post.title}</h4>
                    <p className="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students care about.
                    </p>
                    <div className="mt-5">
                        <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Product;