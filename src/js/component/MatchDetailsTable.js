import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const MatchDetailsTable = () => {
	const { actions, store } = useContext(Context);
	const [state, setState] = useState({
		p1: 0,
		p2: 0,
		p3: 0,
		p4: 0
	});

	const teamPointss = () => {
		if (state.p1 + state.p2 > state.p3 + state.p4) return -1;
		else if (state.p1 + state.p2 < state.p3 + state.p4) return -1;
		else return 0;
	};

	const handleScoreInput = e => {
		setState({
			p1: e.target.value
		});
	};

	return (
		<div className="text-center container-fluid mt-5">
			<table className="table table-dark mt-3 col-12">
				<thead>
					<tr>
						<th scope="col" />
						<th scope="col">Hole</th>
						<th scope="col">1</th>
						<th scope="col">2</th>
						<th scope="col">3</th>
						<th scope="col">4</th>
						<th scope="col">5</th>
						<th scope="col">6</th>
						<th scope="col">7</th>
						<th scope="col">8</th>
						<th scope="col">9</th>
						<th scope="col">Out</th>
						<th scope="col">10</th>
						<th scope="col">11</th>
						<th scope="col">12</th>
						<th scope="col">13</th>
						<th scope="col">14</th>
						<th scope="col">15</th>
						<th scope="col">16</th>
						<th scope="col">17</th>
						<th scope="col">18</th>
						<th scope="col">Out</th>
						<th scope="col">Total</th>
						<th scope="col">HCS</th>
						<th scope="col">newHC</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row" />
						<td>Par</td>
						<td>4</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
						<td>3</td>
						<td>4</td>
						<td>4</td>
						<td>4</td>
						<td>5</td>
						<td>36</td>
						<td>5</td>
						<td>4</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
						<td>3</td>
						<td>4</td>
						<td>4</td>
						<td>4</td>
						<td>36</td>
						<td>72</td>
						<td />
						<td />
					</tr>
					<tr>
						<th scope="row" />
						<td>Distance</td>
						<td>318</td>
						<td>188</td>
						<td>313</td>
						<td>503</td>
						<td>190</td>
						<td>324</td>
						<td>336</td>
						<td>368</td>
						<td>475</td>
						<td>3015</td>
						<td>501</td>
						<td>386</td>
						<td>152</td>
						<td>371</td>
						<td>441</td>
						<td>136</td>
						<td>432</td>
						<td>331</td>
						<td>404</td>
						<td>3154</td>
						<td>6169</td>
						<td />
						<td />
					</tr>
					<tr>
						<th scope="row" />
						<td>HC</td>
						<td>17</td>
						<td>13</td>
						<td>9</td>
						<td>7</td>
						<td>5</td>
						<td>15</td>
						<td>3</td>
						<td>1</td>
						<td>11</td>
						<td />
						<td>10</td>
						<td>8</td>
						<td>18</td>
						<td>6</td>
						<td>16</td>
						<td>14</td>
						<td>2</td>
						<td>12</td>
						<td>4</td>
						<td />
						<td />
						<td />
						<td />
					</tr>
					<tr>
						<th scope="row">
							<input type="text" placeholder="Team 1 Player 1" />
						</th>
						<td>14</td>
						<td>
							<input className="inputs" type="text" onChange={e => handleScoreInput(e)} />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
					</tr>
					<tr>
						<th scope="row">
							<input type="text" placeholder="Team 1 Player 2" />
						</th>
						<td>19</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
					</tr>
					<tr>
						<th scope="row">Team 1</th>
						<td />
						<td>{teamPointss()}</td>
						<td>{teamPointss()}</td>
						<td>{teamPointss()}</td>
						<td>{teamPointss()}</td>
						<td>{teamPointss()}</td>
						<td>{teamPointss()}</td>
						<td>-4</td>
						<td>-7</td>
						<td>-7</td>
						<td>-7</td>
						<td>-4</td>
						<td>-6</td>
						<td>-8</td>
						<td>-11</td>
						<td>-11</td>
						<td>-9</td>
						<td>-7</td>
						<td>-4</td>
						<td>-1</td>
						<td>6</td>
						<td>-1</td>
						<td />
						<td />
					</tr>
					<tr>
						<th scope="row">
							<input type="text" placeholder="Team 2 Player 1" />
						</th>
						<td>17</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
					</tr>
					<tr>
						<th scope="row">
							<input type="text" placeholder="Team 2 Player 2" />
						</th>
						<td>25</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
						<td>
							<input className="inputs" type="text" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
