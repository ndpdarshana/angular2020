import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'; 

@Component({
  selector: 'angularapp-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is an recipe', 
    'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
