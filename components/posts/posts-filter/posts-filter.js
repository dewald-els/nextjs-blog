export default function PostsFilter() {
	return (
		<form>
			<fieldset>
				<div>
					<label htmlFor="year">Year</label>
					<select name="year" id="year">
						<option value="2022">2022</option>
					</select>
				</div>
			</fieldset>
		</form>
	);
}
