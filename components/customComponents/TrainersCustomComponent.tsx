'use client'

import { SimplePortableText } from 'components/portableText/SimplePortableText'
import { getTrainers } from 'lib/sanity.queries'
import { useEffect, useState } from 'react'
import { Refs, Trainer } from 'types'

import SanityComponentImage from '../images/SanityComponentImage'

interface TrainersCustomComponentProps {
	trainerRefs: Refs[]
}

export default function TrainersCustomComponent({ trainerRefs }: TrainersCustomComponentProps) {
	const [loading, setLoading] = useState<boolean>(true)
	const [trainers, setTrainers] = useState<Trainer[]>([])

	useEffect(() => {
		const fetchTrainers = async () => {
			const trainersData: Trainer[] = await Promise.all(trainerRefs.map(async (tr) => getTrainers(tr._ref)))
			setLoading(false)
			setTrainers(trainersData)
		}

		fetchTrainers()
	}, [trainerRefs])

	return (
		<div>
			{loading ? (
				<h1>Content is loading...</h1>
			) : (
				<>
					{trainers.map((tr) => (
						<div key={tr._id} className="grid grid-cols-2 items-center justify-center">
							<div>
								<SanityComponentImage asset={tr.picture.asset} alt={tr.picture.alt} />
								<h3 className="text-lightBlue">Certifications</h3>
								<div className="mt-5">
									{tr.certifications ? (
										<SimplePortableText value={tr.certifications.portableTextBlock} />
									) : null}
								</div>
							</div>
							<div>
								<h2 className="text-grey33">{tr.name}</h2>
								<h3 className="text-orange">{tr.role}</h3>
								<div className="mt-5">
									{tr.bio ? <SimplePortableText value={tr.bio.portableTextBlock} /> : null}
								</div>
							</div>
						</div>
					))}
				</>
			)}
		</div>
	)
}
