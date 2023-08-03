export const getInternalSlug = (obj) => {
	const slugParam = obj.slug.current
	const parentSlug = obj.parentPage ? obj.parentPage.parentSlug.current : null

	if (parentSlug) {
		return `${parentSlug}#${slugParam}`
	}
	return `/${slugParam}`
}
